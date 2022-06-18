"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const database_1 = require("./database");
require("dotenv").config();
const app = (0, app_1.createApp)();
const PORT = 9000;
(0, database_1.db)("mongodb+srv://jodegauto:R6bNsmEF84AdiLRh@vorem.zly4i.mongodb.net/expressApp?retryWrites=true&w=majority").then(() => {
    app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
        console.log("server connected to port:", PORT);
    }));
});
