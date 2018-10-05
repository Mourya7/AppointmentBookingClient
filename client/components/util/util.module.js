'use strict';

import angular from 'angular';
import {
  UtilService
} from './util.service';

export default angular.module('appointmentBookingSystemApp.util', [])
  .factory('Util', UtilService)
  .name;
