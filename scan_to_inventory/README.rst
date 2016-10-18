.. image:: https://img.shields.io/badge/licence-AGPL--3-blue.svg
    :alt: License: AGPL-3


=============================================================================
Provide light Web app to scan products Barcode and generate Stock Inventories
=============================================================================

This module was written to extend the functionality of odoo Stock module.

This module provides a web app designed to work on a Mobile. The app allows
user to scan products and select a quantity to inventory. A draft inventory
is automatically created and updated.

Interface
=========

Authentication
--------------

The first screen asks Odoo credentials. The user should be member of the Odoo
'Warehouse / User' group.

.. image:: /scan_to_inventory/static/src/img/01_phone_authentication.png

Data Loading
------------

Once authenticated, some datas are cached : Active Products, Stock locations
and draft inventories.

.. image:: /scan_to_inventory/static/src/img/02_phone_data_loading.png

Inventory Selection
-------------------

Once datas are loaded, user can select an existing draft stock inventory he
want to complete.

.. image:: /scan_to_inventory/static/src/img/04_phone_select_stock_inventory.png

Alternatively, user can create a new stock inventory, tipping an inventory name.


Location Selection
------------------

Once the inventory created (or selected), user has to select the location where
he is for the time being.

.. image:: /scan_to_inventory/static/src/img/05_select_stock_location.png


Product Selection and Quantity Selection
----------------------------------------

Once the stock inventory is created or selected, the user can select a product,
scanning a barcode.

.. image:: /scan_to_inventory/static/src/img/06_phone_select_product.png

If the EAN13 barcode is recognized, user has to set a quantity to inventory and
then validate.

.. image:: /scan_to_inventory/static/src/img/07_phone_select_quantity.png

If a line with the same product (and same location) already exist, an extra
screen is display to mention wich action to. (sum quantity, or replace the old
value by the one).

.. image:: /scan_to_inventory/static/src/img/08_phone_duplicate_lines.png

Menu
----

A menu is available in each screen that allows user to navigate between
screens.

.. image:: /scan_to_inventory/static/src/img/03_phone_menu.png


Extra Fields
------------

In the company form, admin user can set extra fields that will be displayed
when a product is scanned. A typical use case is to display stock quantity
information.

.. image:: /scan_to_inventory/static/src/img/res_company_configuration.png


.. image:: /scan_to_inventory/static/src/img/07_phone_select_quantity_extra_data.png


Technical Informations
======================

Hardware
--------

This module is designed to work with

* a Browser running on a Mobile (Firefox Mobile / Chrome / ...)
* a Scan reader communicating with the mobile via Bluetooth (SPP settings)

**Implementation Sample**

* Mobile : `Samsung Galaxy Xcover 3 <http://www.samsung.com/fr/consumer/mobile-devices/smartphones/others/SM-G388FDSAXEF>`_
* Browser : `Firefox 46+ <https://www.mozilla.org/en-US/firefox/os/>`_
* Scan Reader : `KDC 400 <https://koamtac.com/kdc400-bluetooth-barcode-scanner/>`_


Used Technologies
-----------------

This module uses extra JS / CSS components.

* `Angular JS v1.x <https://angularjs.org/>`_ 
* `Angular Translate <https://angular-translate.github.io/>`_
* `Ionic Framework <http://ionicframework.com/>`_
* `Ionic Icons <http://ionicons.com/>`_ (MIT Licensed)

* `Angular Odoo <https://github.com/hparfr/angular-odoo>`_, light Javascript
  library developped by `Akretion <http://www.akretion.com/>`_
  and `Camp To Camp <http://www.camptocamp.org/>`_

Available languages
-------------------

* English
* French

If you want to use other languages just copy past the french translation file
in the 'static/www/i18n' sub folder and propose new translation.

Similar Projects
----------------

* You could be interested by another implementation of similar features
  `'stock_scanner' on Github <https://github.com/syleam/stock_scanner>`_
  developped by `Syleam <https://www.syleam.fr/>`_
  and `Acsone <https://www.acsone.eu/>`_.

Installation
============

Normal installation.

Once installed, assuming that your Odoo instance is accessible by the URL
http//localhost:8069/, the web app can be reached at the URL
http//localhost:8069/scan_to_inventory/static/www/index.html

Configuration
=============

* Optionnaly, admin user can select extra fields to display. (see above)

* Language is displayed, depending on the languages provided by the browser.
 If you want to manually change it, you can to do so on firefox:

    * go to about:config
    * Change the value of the key 'intl.accept_languages'

Credits
=======

Contributors
------------

* Sylvain LE GAL <https://twitter.com/legalsylvain>

Roadmap / Current Limits
------------------------

* Dates displays does NOT change depending of the localization of the user;

* JS and CSS lib are hard included. So if many apps are developped, it could
  be great to have a generic 'web_ionic' module that have all tools to avoid
  to duplicate files;

* Extra Fields Names are displayed only in english;

Known Issues
------------

* **Firefox Ionic Bug** : The first screen allows user to select database,
  in a multi database context. This module use ionic select component, that
  doesn't not works On Firefox Mobile.
  `See the bug on Ionic Github <https://github.com/driftyco/ionic/issues/4767>`_

* **Chrome Mobile limitation** : This module plays mp3 sounds when actions is,
  done. This feature is not available for Chrome Mobile for the time being,
  cause Chrome consider that allowing to play a sound without explicit action
  of the user raises security issues.
  `See the bug on Chromium website <https://bugs.chromium.org/p/chromium/issues/detail?id=178297>`_

