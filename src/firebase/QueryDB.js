import { firestore } from '../firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const brotherData = await getDocs(collection(firestore, "members"));
const officerData = await getDocs(collection(firestore, "officers"));
let brothers = {}
let officers = {}
let classMap = {}
let yearMap = {}
let classes = ["Upsilon", "Tau", "Sigma", "Rho", "Pi", "Omicron", "Xi", "Nu", "Mu", "Lambda", "Kappa", "Iota", "Theta", "Eta", "Zeta", "Epsilon", "Delta", "Gamma", "Beta", "Alpha", "Founding"]

const getBrothers = async () => {
    try {
        brotherData.forEach((doc) => {
            brothers[doc.id] = doc.data()
        });
    } catch(e) {
        console.error(e);
    }    
}

const getOfficers = async () => {
    try {
        officerData.forEach((doc) => {
            officers[doc.id] = doc.data()
        });
    } catch(e) {
        console.error(e);
    }    
}

const populateClassMap = () => {
    Object.entries(brothers).forEach(([key,value]) => {
        try {
            classMap[value["Class"]].push(key)
        }
        catch {
            classMap[value["Class"]] = [key]
        }
    })
}

const populateYearMap = () => {
    Object.entries(brothers).forEach(([key,value]) => {
        try {
            yearMap[value["GraduatingClass"]].push(key)
        }
        catch {
            yearMap[value["GraduatingClass"]] = [key]
        }
    })
}

getBrothers()
getOfficers()
populateClassMap()
populateYearMap()

export { brothers, officers, classes, classMap, yearMap };