/* tslint:disable interface-name*/

// Import all structures to export here
// Run npm build to compile
// or a derived command there of (build:browser, etc)

import * as Bitmask from "./build/bitmask/bitmask";

import { LinkedList } from "./linkedlist/linkedlist";
import { Queue } from "./linkedlist/queue";
import { SingleNode } from "./linkedlist/singlenode";
import { Stack } from "./linkedlist/stack";

// This is set up for commonJS imports (Node style).
// To enable browser imports you can include the commonJS
// library, or you can declare in the global (window) scope
// by following the instructions below

// If you wish for the export to be available in the global
// scope, then you must declare Window interface with property
// name of type any. You must then assign the export to
// window.[name].
// See the example below.

// declare global {
//   interface Window {
//     bitmask: any;
//     LinkedList: any;
//   }
// }

// window.bitmask = bitmask;
// window.LinkedList = LinkedList;
