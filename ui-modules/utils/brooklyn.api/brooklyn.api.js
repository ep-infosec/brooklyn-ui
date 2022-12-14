/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import angular from 'angular';

import {applicationApiProvider} from '../providers/application-api.provider'
import {catalogApiProvider} from '../providers/catalog-api.provider'
import {locationApiProvider} from '../providers/location-api.provider'
import {sensorApiProvider} from '../providers/sensor-api.provider'
import serverApi from '../api/brooklyn/server';
import {logbookApiProvider} from "../providers/logbook-api.provider";

const MODULE_NAME = 'utils.brooklyn.api';

angular.module(MODULE_NAME, [serverApi])
    .provider('applicationApi', applicationApiProvider)
    .provider('catalogApi', catalogApiProvider)
    .provider('locationApi', locationApiProvider)
    .provider('sensorApi', sensorApiProvider)
    .provider('logbookApi', logbookApiProvider);

export default MODULE_NAME;
