import users from "entities/user/user.slice";
import profile from "entities/profile/profile.slice";
import map from "entities/map/map.slice";
import projects from "entities/project/project.slice";
import auth from "entities/auth/auth.slice";
import grade from "entities/grade/grade.slice";
import stack from "entities/stack/stack.slice";
import devGroup from "entities/developerGroup/developerGroup.slice";

const rootReducer = {
    auth,
    devGroup,
    grade,
    users,
    profile,
    projects,
    stack,
    map,
};

export default rootReducer;