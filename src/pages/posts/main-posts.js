import mainPostsCSS from "./style/posts.module.css";
import Posts from "./posts";
import {FORREST_GUMP, JOHN_COFFEE, ANDY_DUFRESNE} from "./char";

function AppPosts() {
    return (
        <div className={mainPostsCSS.wrapper}>
            <Posts props={FORREST_GUMP}/>
            <Posts props={JOHN_COFFEE}/>
            <Posts props={ANDY_DUFRESNE}/>
        </div>
    );
}

export default AppPosts;
