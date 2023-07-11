import { IToolFilterItem } from "./ToolFilter/types";

export const team_groups: IToolFilterItem[] = [{
    id: null,
    name: "Все",   
}, {
    id: "developer",
    name: "Разработчики"
}, {
    id: "designer",
    name: "Дизайнеры"
}, {
    id: "analyst",
    name: "Аналитики"
}, {
    id: "test",
    name: "Тестировщики"
}, {
    id: "manager",
    name: "Менеджеры"
}, {
    id: "hr",
    name: "HR"
}];

export const units: IToolFilterItem[] = [
    {id: null, name: "Все"}, 
    {id: "crtweb", name: "Креатив" }, 
    {id: "cursource", name: "Курсорс"},
];

export const default_team = team_groups[0];