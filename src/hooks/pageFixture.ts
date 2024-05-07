import {  Page } from "playwright";
import {Logger, LoggerOptions} from "winston";
import winston = require("winston/lib/winston/config");

export const pageFixture={  
   // @ts-ignore  
    page:undefined as Page,
    logger:undefined as Logger
   
}