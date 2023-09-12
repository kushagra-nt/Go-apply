
const unwantedTitles = [
    'II',
    'Manager',
    'Sr',
    'Staff',
    'Senior',
    '2',
    'Lead',
];

const unwantedJDs = [
    '2+ years',
    '1+ years',
    '2 years',
    '1 year',
    '2 yoe',
    '1 yoe',
    '2+ yoe',
    '1+ yoe',
]

export default async function (jobs){
    return jobs.filter(job => {
        for (const unwantedTitle of unwantedTitles) {
            if (job.name.toLowerCase().includes(unwantedTitle.toLowerCase()))
                return false;
        }
        for (const unwantedJD of unwantedJDs) {
            if (job.jd.toLowerCase().includes(unwantedJD.toLowerCase()))
                return false;
        }
        return true;
    });
}