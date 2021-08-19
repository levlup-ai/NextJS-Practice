import Style from "../styles/About.module.css";
const about = () => {
    return (
        <div>
            <h1 className={Style.red}>This is the about page</h1>
            <p className={Style.para}>This basic style has been designed using the About.module.css file</p>
        </div>
    );
}

export default about;