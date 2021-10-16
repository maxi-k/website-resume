import { useEffect, useState } from 'react'

const SKILL_EXCLUDED_REPOS = Object.freeze([
    "dwm",
    "hci-complementing-mirror",
    "bachelor-code-arduino",
    "osv",
    "ops"
])
const SKILL_TRIVIAL_LANGUAGES = new Set([
    "HTML",
    "CSS",
    "TeX",
    "R",
])
const SKILL_API_URL = "https://okhkp2o8fd.execute-api.eu-central-1.amazonaws.com/default/"
const cache = {}
export const useSkills = () => {
    const [skills, setSkills] = useState(cache.current);
    useEffect(() => {
        console.log(cache)
        if (!!cache.current) {
            return setSkills(cache.current)
        }
        fetch(SKILL_API_URL, {
            method: "POST",
            body: JSON.stringify({ top: 80, exclude: SKILL_EXCLUDED_REPOS })
        })
            .then(res => res.json())
            .then(body => {
                console.log(body);
                const sorted = body.skills.sort((s1, s2) => (
                    s1.codeSize === s2.codeSize ? 0 :
                        s1.codeSize < s2.codeSize ? 1 : -1
                )).filter(skill => !SKILL_TRIVIAL_LANGUAGES.has(skill.name))
                cache.current = { cached: true, skills: sorted };
                return setSkills({ cached: false, skills: sorted })
            })
            .catch(error => {
                console.log(error);
                return setSkills({ error })
            })
    }, [/* run only once */])
    return skills
}
