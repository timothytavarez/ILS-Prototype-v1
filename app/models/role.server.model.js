'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Role Schema
 */
var RoleSchema = new Schema({
  // Muse Employee
  museLogin: Boolean,
  editAllOrganizations: Boolean,
  viewAllOrganizations: Boolean,
  browseSystemItems: Boolean,

  // Librarians
  staffLogin: Boolean,

  // Librarians - Circulate
  checkOut: Boolean,
  checkIn: Boolean,
  sell: Boolean,
  forceCheckout: Boolean, // Allow checkout if a limitation exists
  forceRenewal: Boolean, // Allow renewal if a limitation exists
  forceReserve: Boolean,
  forceSell: Boolean,
  editReservePriority: Boolean,
  manageRestrictions: Boolean,
  generateOverdueReport: Boolean,

  // Librarians - Administration
  editOrganizationSettings: Boolean,
  editOrganizationCalendar: Boolean,
  editOrganizationAnnouncements: Boolean, // Viewable once logged in as a staff member
  editOrganizationNews: Boolean, // Viewable publicly/by patrons
  editQuoteOfTheDay: Boolean, // Edit queued quote of the day (If enabled in settings)
  scheduleStaffNewsletter: Boolean, // Emailed
  schedulePatronNewsletter: Boolean,
  emailPatron: Boolean,
  manageCirculationRules: Boolean,
  manageNotificationRules: Boolean, // Triggers & notice message
  editStaffAccounts: Boolean, // Includes permissions
  viewStaffAccounts: Boolean,
  viewLogs: Boolean,
  exportLogs: Boolean,
  viewReports: Boolean,

  // Librarians - Borrower Management
  addPatrons: Boolean,
  editPatrons: Boolean,
  editPatronComments: Boolean,
  editPatronTags: Boolean,
  updateCharges: Boolean,
  writeOffCharges: Boolean,
  bulkImportPatrons: Boolean,
  bulkEditPatrons: Boolean,

  // Librarian - Catalog Management
  editCatalogBibliographic: Boolean, // Data about a item (i.e. title)
  editCatalogHolding: Boolean,
  editCatalogItem: Boolean, // i.e. add a new book or mark a book as for sell, tags
  editSubscribedSerials: Boolean,
  viewSubscribedSerials: Boolean,
  addMissingSerial: Boolean,
  addReceivedSerials: Boolean,
  massEditCatalogHoldings: Boolean,
  massEditCatalogItems: Boolean,
  exportCatalog: Boolean,
  createLabel: Boolean, // printable labels/cards for patrons
  createBarcode: Boolean, // Printable barcodes from catalog

  // Librarian - Acquisitions
  viewBudget: Boolean,
  editBudget: Boolean,
  addBudgetItem: Boolean,
  editBudgetItem: Boolean,
  viewBudgetItems: Boolean,
  addVendor: Boolean,
  editVendor: Boolean,
  addOrder: Boolean,
  editOrder: Boolean,
  receiveOrder: Boolean, // Can receive item or entire order
  viewOrderReports: Boolean,

  // Patron
  patronLogin: Boolean,
  reserve: Boolean,
  search: Boolean,

  user: {type: Schema.ObjectId, ref: 'User'} // assuming you name your model User
});
