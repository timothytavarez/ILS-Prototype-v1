(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.name = 'baseAdminRights';
exports.rights = [
	{ name: 'manageNotificationRules', desc: 'Add description here' },
	{ name: 'editOrgCalendar', desc: 'Add description here' },
	{ name: 'editOrgAnnouncements', desc: 'Add description here' },
	{ name: 'editOrgNews', desc: 'Add description here' },
	{ name: 'editQuoteOfTheDay', desc: 'Add description here' },
	{ name: 'schedulePatronNewsletter', desc: 'Add description here' },
	{ name: 'emailPatron', desc: 'Add description here' }
];

},{}],2:[function(require,module,exports){
exports.name = 'baseBarcodeRights';
exports.rights = [
	{ name: 'createBarcode', desc: 'Add description here' },
	{ name: 'editBarcode', desc: 'Add description here' },
	{ name: 'deleteBarcode', desc: 'Add description here' }
];


},{}],3:[function(require,module,exports){
exports.name = 'baseCatalogRights';
exports.rights = [
	{ name: 'createItem', desc: 'Add description here' },
	{ name: 'editItemData', desc: 'Add description here' },
	{ name: 'editItemHolding', desc: 'Add description here' },
	{ name: 'editItemTag', desc: 'Add description here' }
];


},{}],4:[function(require,module,exports){
exports.name = 'baseCircRights';
exports.rights = [
	{ name: 'checkOut', desc: 'Add description here' },
	{ name: 'checkIn', desc: 'Add description here' },
	{ name: 'renew', desc: 'Add description here' },
	{ name: 'hold', desc: 'Add description here' }
];

},{}],5:[function(require,module,exports){
exports.name = 'baseLabelRights';
exports.rights = [
	{ name: 'createLabel', desc: 'Add description here' },
	{ name: 'editLabel', desc: 'Add description here' },
	{ name: 'deleteLabel', desc: 'Add description here' }
];


},{}],6:[function(require,module,exports){
exports.name = 'basePatronAdminRights';
exports.rights = [
	{name: 'addPatrons', desc: 'Add description here' },
	{name: 'editPatrons', desc: 'Add description here' },
	{name: 'editPatronComments', desc: 'Add description here' },
	{name: 'editPatronTags', desc: 'Add description here' },
];

},{}],7:[function(require,module,exports){
exports.name = 'basePatronAdminRights';
exports.rights = [
	{ name: 'addPatrons', desc: 'Add description here' },
	{ name: 'editPatrons', desc: 'Add description here' },
	{ name: 'editPatronComments', desc: 'Add description here' },
	{ name: 'editPatronTags', desc: 'Add description here' }
];

},{}],8:[function(require,module,exports){
exports.name = 'baseReportRights';
exports.rights = [
	{ name: 'launchReports', desc: 'Add description here' },
	{ name: 'viewReportResults', desc: 'Add description here' },
	{ name: 'downloadReportResults', desc: 'Add description here' }
];

},{}],9:[function(require,module,exports){
exports.name = 'baseSerialRights';
exports.rights = [
	{ name: 'editSubscribedSerials', desc: 'Add description here' },
	{ name: 'viewSubscribedSerials', desc: 'Add description here' },
	{ name: 'addMissingSerial', desc: 'Add description here' },
	{ name: 'addReceivedSerials', desc: 'Add description here' }
];

},{}],10:[function(require,module,exports){
exports.name = 'extAdminRights';
exports.rights = [
	{ name: 'editOrgSettings', desc: 'Add description here' },
	{ name: 'scheduleStaffNewsletter', desc: 'Add description here' },
	{ name: 'editStaffAccounts', desc: 'Add description here' },
	{ name: 'viewStaffAccounts', desc: 'Add description here' },
	{ name: 'viewLogs', desc: 'Add description here' },
	{ name: 'exportLogs', desc: 'Add description here' }
];

},{}],11:[function(require,module,exports){
exports.name = 'extCatalogRights';
exports.rights = [
	{ name: 'massEditCatalogHoldings', desc: 'Add description here' },
	{ name: 'massEditCatalogItems', desc: 'Add description here' },
	{ name: 'exportCatalog', desc: 'Add description here' }
];


},{}],12:[function(require,module,exports){
exports.name = 'extCircRights';
exports.rights = [
	{ name: 'forceCheckout', desc: 'Add description here' },
	{ name: 'forceRenewal', desc: 'Add description here' },
	{ name: 'forceHold', desc: 'Add description here' },
	{ name: 'editHoldPriority', desc: 'Add description here' },
	{ name: 'manageRestrictions', desc: 'Add description here' },
	{ name: 'generateOverdueReport', desc: 'Add description here' },
	{ name: 'manageCircRules', desc: 'Add description here' }
];

},{}],13:[function(require,module,exports){
exports.name = 'extPatronRights';
exports.rights = [
	{name: 'updateCharges', desc: 'Add description here' },
	{name: 'writeOffCharges', desc: 'Add description here' },
	{name: 'bulkImportPatrons', desc: 'Add description here' },
	{name: 'bulkEditPatrons', desc: 'Add description here' },
];

},{}],14:[function(require,module,exports){
exports.name = 'extReportRights';
exports.rights = [
	{ name: 'createReportTemplates', desc: 'Add description here' },
	{ name: 'deleteReportTemplates', desc: 'Add description here' },
	{ name: 'importReportTemplates', desc: 'Add description here' },
	{ name: 'exportReportTemplates', desc: 'Add description here' }
];

},{}],15:[function(require,module,exports){
exports.name = 'godRights';
exports.rights = [
	{name: 'editAllOrgs', desc: 'Add description here' },
	{name: 'viewAllOrgs', desc: 'Add description here' },
	{name: 'browseSystemItems', desc: 'Add description here' }
];

},{}],16:[function(require,module,exports){
(function (__dirname){
'use strict';

// Load `*.js` under current directory as properties
//  i.e., `User.js` will become `exports['User']` or `exports.User`
require('fs').readdirSync(__dirname + '/').forEach(function(file) {
	if (file.match(/\.js$/) !== null && file !== 'index.js') {
		var name = file.replace('.js', '');
		exports[name] = require('./' + file);
	}
});

}).call(this,"/app/models/rights")
},{"fs":20}],17:[function(require,module,exports){
exports.name = 'loginRights';
exports.rights = [
	{ name: 'devLogin', desc: 'Add description here' },
	{ name: 'staffLogin', desc: 'Add description here' },
	{ name: 'patronLogin', desc: 'Add description here' }
];

},{}],18:[function(require,module,exports){
exports.name = 'readBudgetRights';
exports.rights = [
	{ name: 'viewBudget', desc: 'Add description here' },
	{ name: 'viewBudgetItems', desc: 'Add description here' },
	{ name: 'viewOrderReports', desc: 'Add description here' }
];


},{}],19:[function(require,module,exports){
exports.name = 'writeBudgetRights';
exports.rights = [
	{ name: 'receiveOrder', desc: 'Add description here' },
	{ name: 'addVendor', desc: 'Add description here' },
	{ name: 'addOrder', desc: 'Add description here' },
	{ name: 'addBudgetItem', desc: 'Add description here' },
	{ name: 'editOrder', desc: 'Add description here' },
	{ name: 'editBudget', desc: 'Add description here' },
	{ name: 'editBudgetItem', desc: 'Add description here' },
	{ name: 'editVendor', desc: 'Add description here' }
];


},{}],20:[function(require,module,exports){

},{}]},{},[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
