import '../skills/style/skills.css'

const softSkills = [
    {title: "VisualStudio", img: ""},
    {title: "MongoDB", img: ""},
    {title: "Github", img: ""},
    {title: "Figma", img: ""},
    {title: "Notion", img: ""},
    {title: "Postman", img: ""}
]

const hardSkills =[
    {title: "Html", rating:""},
    {title: "Css", rating:""},
    {title: "JavaScript", rating:""},
    {title: "React", rating:""},
    {title: "Sass", rating:""},
    {title: "NodeJs", rating:""}
]

function Skills(){
    return(
        <div id='skill'>
            <div id='skill1'>
                <h2>Hard Skills</h2>
                <div id="sidebars">
                {hardSkills.map((item, index)=>{
                    return(
                        <div className='hard-skills' key={index}>
                            <p>{item.title}</p>
                            <img src="" alt="" id= {`sidebar-${index}`} className='hard-skills-sidebar' />
                        </div>
                    )
                })}
                </div>
            </div>
            <div id='skill2'>
                <h2>Software Skills</h2>
                <div id="icons">
                {softSkills.map((item, index)=>{
                    return(
                        <div className='soft-skills' key={index}>
                            <img src="" alt="" id= {`img-${index}`} className='soft-skills-img' />
                            <p>{item.title}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default Skills