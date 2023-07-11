import { 
  project_10, 
  project_4, 
  project_2, 
  project_5 
} from "entities/project/project.constants";
import { IProfileMe, IProfileState } from "./profile.types";

export const defaultProfile: IProfileMe = {
    id: 227,
    name: "Ирина Широкова",
    email: "shi@somedomain.com",
    createdAt: "2022-06-27T10:12:42.000000Z",
    updatedAt: "2022-06-27T10:12:42.000000Z",
    roles: [
      {
        "id": 4,
        "name": "spec"
      }
    ],
    description: "",
    position: "",
    grade: "",
    projects: [
      project_10,
      project_4,
      project_2,
      project_5,
    ]
};

export const INITIAL_STATE: IProfileState = {
  me: defaultProfile,
}