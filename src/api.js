import { useEffect, useState } from 'react'

const SKILL_EXCLUDED_REPOS = Object.freeze([
    "dwm",
    "bachelor-code-arduino",
    "hci-complementing-mirror"
])
const SKILL_TRIVIAL_LANGUAGES = new Set([
    "HTML",
    "CSS",
])
const SKILL_API_URL = "https://okhkp2o8fd.execute-api.eu-central-1.amazonaws.com/default/"
export const useSkills = () => {
    const [skills, setSkills] = useState(null);
    useEffect(() => {
        fetch(SKILL_API_URL, {
            method: "POST",
            body: JSON.stringify({ top: 30, exclude: SKILL_EXCLUDED_REPOS })
        })
            .then(res => res.json())
            .then(body => {
                const sorted = body.skills.sort((s1, s2) => (
                    s1.codeSize === s2.codeSize ? 0 :
                        s1.codeSize < s2.codeSize ? 1 : -1
                )).filter(skill => !SKILL_TRIVIAL_LANGUAGES.has(skill.name))
                return setSkills(sorted)
            })
            .catch(error => {
                console.log(error);
                return setSkills({ error })
            })
    }, [/* run only once */])
    return skills
}
