import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './ProjectForm.module.css'

    function ProjectForm({btnText}) {
        return (
            <form className={styles.form}>
                <Input
                    type="text"
                    text="Project name"
                    name="name"
                    placeholder="Enter project name"
                />
                <Input
                    type="number"
                    text="Project budget"
                    name="budget"
                    placeholder="Enter project budget"
                />
                <Select 
                    name="ctaegory_id"
                    text="Select category"
                />
                
               <SubmitButton text={btnText}/>
            </form>
        )
    }

export default ProjectForm