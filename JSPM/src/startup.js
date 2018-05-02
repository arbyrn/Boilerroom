import 'bootstrap/css/bootstrap.css!';
import 'src/css/styles.css!';
import bootstrap from 'bootstrap';
import $ from 'jquery';
//You can namespace like below
//import * as pubsub from './pubsub';
// then pubsub.on();
import {addPerson, deletePerson} from './people';
import {destroy} from './statsDis';

// Examples of how you bring in CSS and JS files