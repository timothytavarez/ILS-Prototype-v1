'use strict';"

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

// Method helper functions
function UppercaseFirstLetter( str ) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function assignRight( right, rightsGroup ) {
	rightsGroup[right] = true;
	rightsGroup.markModified(right);
}

function unassignRight( right, rightsGroup ) {
	rightsGroup[right] = undefined;
	rightsGroup.markModified(right);
}



// which in turn loads all our rights javascript files
var rightsGroups = require('./rights');

// var roleMethods;
var roleOptions;
var roleObj = {
	roleName: {
		type: String,
		required: true,
		trim: true
	},

	desc: {
		type: String,
		trim: true
	},
	
	created: { 
		type: Date,
		default: Date.now
	},

	updated: {
		type: Date,
		default: Date.now
	},
};

for (var group in rightsGroups) {
	if (rightsGroups.hasOwnProperty(group)) {
		
		// Automatically fill out our roleObj with the rightsGroups found 
		// in the ./rights directory.
		// If the rightsGroup has a name specified(and it is a string) use it
		if( rightsGroups[group].name && typeof(rightsGroups[group].name) === "string" ) {
			roleObj[rightsGroups[group].name] = Schema.Types.Mixed;
			roleOptions[rightsGroups[group].name] = rightsGroups[group].rights;
		}
		// otherwise default to the file's name.
		else {
			roleObj[group] = Schema.Types.Mixed;
			roleOptions[group] = rightsGroups[group].rights;
		}
	}
}


/**
 * Role Schema
 */
var RoleSchema = new Schema( roleObj );
//
// Automatically fill out our roleStatic methods
// These static methods will be used to get a list of all possible
// rights there are to set for each rightsGroup.
// Our front end entry forms will use these functions to fill
// out the possible selections.
//
// roleStatics

RoleSchema.statics.listAllOptions  = function()  {
	return JSON.stringify(roleOptions);
}

	/*	
		{



  // Muse Employee Rights
	godRights: Schema.Types.Mixed,
  // editAllOrgs: Boolean,
  // viewAllOrgs: Boolean,
  // browseSystemItems: Boolean,

  // Login Access Rights
	loginRights: Schema.Types.Mixed,
  // devLogin: Boolean,
  // staffLogin: Boolean,
	// patronLogin: Boolean,

	
  // Base Circulation Rights
	baseCircRights: Schema.Types.Mixed,
  // checkOut: Boolean,
  // checkIn: Boolean,
  // sell: Boolean,
	
  // Extended Circulation Rights
	extCircRights: Schema.Types.Mixed,
  // forceCheckout: Boolean, // Allow checkout if a limitation exists
  // forceRenewal: Boolean, // Allow renewal if a limitation exists
  // forceReserve: Boolean,
  // forceSell: Boolean,
  // editReservePriority: Boolean,
  // manageRestrictions: Boolean,
  // generateOverdueReport: Boolean,
  // manageCirculationRules: Boolean,

  // Base Administrative Rights
	baseAdminRights: Schema.Types.Mixed,
  // manageNotificationRules: Boolean, // Triggers & notice message
  // editOrgCalendar: Boolean,
  // editOrgAnnouncements: Boolean, // Viewable once logged in as a staff member
  // editOrgNews: Boolean, // Viewable publicly/by patrons
  // editQuoteOfTheDay: Boolean, // Edit queued quote of the day (If enabled in settings)
  // schedulePatronNewsletter: Boolean,
  // emailPatron: Boolean,

	// Extended Administrative Rights
  extAdminRights: Schema.Types.Mixed,
  // editOrgSettings: Boolean,
  // scheduleStaffNewsletter: Boolean, // Emailed
  // editStaffAccounts: Boolean, // Includes permissions
  // viewStaffAccounts: Boolean,
  
  // viewLogs: Boolean,
  // exportLogs: Boolean,
	
	// Base Reporting Rights
	baseReportRights: Schema.Types.Mixed,
	// launchReports: Boolean,
	// viewReportResults: Boolean,
	// downloadReportResults: Boolean,
	
	// Extended Reporting RIghts
	extReportRights: Schema.Types.Mixed,
	// createReportTemplates: Boolean,
	// deleteReportTemplates: Boolean,
	// importReportTemplates: Boolean,
	// exportReportTemplates: Boolean,

  // Base Patron Management Rights
	basePatronRights: Schema.Types.Mixed,
  // addPatrons: Boolean,
  // editPatrons: Boolean,
  // editPatronComments: Boolean,
  // editPatronTags: Boolean,
	
	// Extended Patron Management Rights
	extPatronRights: Schema.Types.Mixed,
  // updateCharges: Boolean,
  // writeOffCharges: Boolean,
  // bulkImportPatrons: Boolean,
  // bulkEditPatrons: Boolean,

  // Base Cataloging Rights
	baseCatalogRights: Schema.Types.Mixed,
	// createItem: Boolean,
  // editItemData: Boolean, // Data about an item (i.e. title)
  // editItemHolding: Boolean, // Data about current status of the item(ie, avialable, lost, long overdue, lost and paid for, missing in Inventory, or Missing in Hold Queue)
  // editItemTag: Boolean, // i.e. mark a book as for sell, lost, and other such tags

	// Extended Cataloging Rights
	extCatalogRights: Schema.Types.Mixed,
  // massEditCatalogHoldings: Boolean,
  // massEditCatalogItems: Boolean,
  // exportCatalog: Boolean,

	// Base Serial Cataloging Rights
	baseSerialRights: Schema.Types.Mixed,
  // editSubscribedSerials: Boolean,
  // viewSubscribedSerials: Boolean,
  // addMissingSerial: Boolean,
  // addReceivedSerials: Boolean,

	// Base Labeling Rights
	baseLabelRights: Schema.Types.Mixed,
  // createLabel: Boolean, // printable labels/cards for patrons
	// editLabel: Boolean,
	// deleteLabel: Boolean,

	// Base Barcoding Rights
	baseBarcodeRights: Schema.Types.Mixed,
  // createBarcode: Boolean, // Printable barcodes from catalog
	// editBarcode: Boolean,
	// deleteBarcode: Boolean,

  // Read Budget Rights
	readBudgetRights: Schema.Types.Mixed,
  // viewBudget: Boolean,
  // viewBudgetItems: Boolean,
  // viewOrderReports: Boolean,

	// Write Budget Rights
	writeBudgetRights: Schema.Types.Mixed,
  // receiveOrder: Boolean, // Can receive item or entire order
  // addVendor: Boolean,
  // addOrder: Boolean,
  // addBudgetItem: Boolean,
  // editOrder: Boolean,
  // editBudget: Boolean,
  // editBudgetItem: Boolean,
  // editVendor: Boolean,
	// TODO: deletion Rights?
});

*/



/**
 * Hook a pre save method to keep the updated property current
 */
RoleSchema.pre('save', function(next) {
	this.updated = Date.now;
	next();
});
