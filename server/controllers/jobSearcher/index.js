import postProcessJobs from "../../utils/postProcessJobs";
import updateJobs from "../../utils/updateJobs";

const jobSearchers = [

];

export default async function main (req,res){

    if(req.params.password!=='iamKushagra'){
        return res.status(400).send('you are not allowed to access this route');
    }

    /*
        job Schema = {
            id: string;
            name: string;
            url: string;
            jd: string;
            location: string;
            companyName: string;
        }

        jobSearcher Schema = {
            companyName,
            getJobs
        }
    */

    for(const jobSearcher of jobSearchers){
        try{
            const jobs = await jobSearcher.getJobs();
            const newJobs = await postProcessJobs(jobs);
            await updateJobs(newJobs, jobSearcher.companyName);
        }
        catch(err){
            console.log(`Error processing jobs for ${jobSearcher.companyName}, ${err}`);
        }
    }

    res.status(200).send('done');
}