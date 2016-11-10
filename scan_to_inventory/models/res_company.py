# -*- coding: utf-8 -*-
# Copyright (C) 2016-Today: GRAP (http://www.grap.coop)
# @author: Sylvain LE GAL (https://twitter.com/legalsylvain)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

from openerp import fields, models


class ResCompany(models.Model):
    _inherit = 'res.company'

    scan_inventory_product_fields_ids = fields.Many2many(
            'ir.model.fields', 'res_company_product_fields_inventory_rel',
            'config_id', 'field_id', string='Product Fields',
            domain=[('model', 'in', ['product.template', 'product.product'])])
