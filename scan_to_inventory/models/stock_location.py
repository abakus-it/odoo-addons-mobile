# -*- coding: utf-8 -*-
# Copyright (C) 2016-Today: GRAP (http://www.grap.coop)
# @author: Sylvain LE GAL (https://twitter.com/legalsylvain)
# License AGPL-3.0 or later (http://www.gnu.org/licenses/agpl.html).

from openerp import fields, models


class StockLocation(models.Model):
    _inherit = 'stock.location'

    # Compute Section
    def _compute_parent_complete_name(
            self, cr, uid, ids, name, args, context=None):
        res = {}
        for location in self.browse(cr, uid, ids, context=context):
            if location.location_id:
                res[location.id] = location.location_id.complete_name
            else:
                res[location.id] = ''
        return res

    # Fields Section
    parent_complete_name = fields.Char(
            compute='_compute_parent_complete_name', string='Parent Complete Name')
