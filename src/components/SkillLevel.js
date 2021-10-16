import React from 'react'
import { Link } from 'components/Link'
import { useSkills } from 'api'

const MultiColorBar = ({ items }) => {
  return (
    <span className="Percentile-Bar">
      {
        items.map(({ color, percentage }) => (
          <span key={color}
                className="Percentile-Bar-Item"
                style={{ width: `${(percentage * 100).toFixed(3)}%`,
                         backgroundColor: color }}>
          </span>
        ))}
    </span>
  )
}

export const SkillDescription = ({ name, color, percentage, uriKey = null }) => (
  <span className="Skill-Description">

    <Link extern nohighlight className="Skill-Tag"
          href={"https://github.com/maxi-k?tab=repositories&q=&type=&language="
                + encodeURIComponent((uriKey || name.toLowerCase()).trim())}>
      <span className="Skill-ColorTag" style={{ backgroundColor: color }}> </span>
      <span className="Skill-NameTag">{name}</span>
      <span className="Skill-PercentageTag">{(percentage * 100).toPrecision(2)}%</span>
    </Link>
  </span>
)

export const SkillLevels = (props) => {
  const data = useSkills()
  if (!data) {
    return <div className="SkillLevels-Loading"/>
  }
  const { cached, skills } = data;
  if (!!skills && !!skills.error) {
    return <div className="SkillLevels-Error"/>
  } else if (!skills || skills.length === 0) {
    return <div className="SkillLevels-Loading"/>
  }
  const sum = skills.reduce((sum, skill) => sum + skill.codeSize, 0)
  const perc = skills.map(skill => ({...skill, percentage: skill.codeSize / sum }))
  const top = perc.filter(skill => skill.percentage >= 0.03);
  const restPerc = 1 - top.reduce((sum, skill) => sum + skill.percentage, 0);
  top.push({ name: "Others", color: "#eeeeee", percentage: restPerc, uriKey: " " })
  return (
    <div className={`SkillLevels ${ cached || 'network' }`}>
      <MultiColorBar items={top}/>
      <div className="SkillLevels-Descriptions">
        { top.map(skill => <SkillDescription key={skill.name} {...skill} />) }
      </div>
    </div>
  )
}
