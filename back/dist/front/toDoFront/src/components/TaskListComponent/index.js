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
require("./index.css");
const constants_1 = require("../../constants");
const react_1 = require("react");
function TaskListComponent() {
    const [taskList, setTaskList] = (0, react_1.useState)(null);
    const getAllTasks = () => __awaiter(this, void 0, void 0, function* () {
        let result = yield fetch(constants_1.BASE_URL, {
            method: "get",
        });
        result = yield result.json();
        console.log(result);
    });
    (0, react_1.useEffect)(() => {
        getAllTasks();
    }, []);
    return (<div>
      
    </div>);
}
exports.default = TaskListComponent;
