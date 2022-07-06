import {useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const history = useNavigate()

    function createPost(project){
        //initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {
            console.log(data)
            //redirect
            history('/projects', {state:{message: 'Project created successfully!'}})
        })
        .catch(err => console.log(err))
    }




    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>Create a project to add your servicing</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
    }
    
    export default NewProject