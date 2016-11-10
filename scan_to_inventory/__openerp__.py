# -*- coding: utf-8 -*-
# Copyright (C) 2016-Today: GRAP (http://www.grap.coop)
# @author: Sylvain LE GAL (https://twitter.com/legalsylvain)
# @author: Valentin THIRION (https://twitter.com/val_thirion)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

{
    'name': 'Scan To Inventory',
    'version': '10.0.1.0.0',
    'category': 'Stock',
    'author': 'GRAP',
    'website': 'http://www.grap.coop',
    'license': 'AGPL-3',
    'depends': [
        'stock',
    ],
    'data': [
        'views/view_res_company.xml',
    ],
    'demo': [
        'demo/res_users.xml',
        'demo/product_product.xml',
    ],
}
