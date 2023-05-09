"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const react_router_dom_1 = require("react-router-dom");
const TaskListComponent_1 = __importDefault(require("./components/TaskListComponent"));
function App() {
    return (<>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<TaskListComponent_1.default />}/>
        <react_router_dom_1.Route path="/task" element={<TaskListComponent_1.default />}/>
        <react_router_dom_1.Route />
      </react_router_dom_1.Routes>
    </>);
}
exports.default = App;
