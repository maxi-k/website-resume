import React from 'react'
import Link from 'components/Link'
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

const ColorBar = ({ color, percentage }) => {
    const widthStyle = `${(percentage * 100).toFixed(3)}%`
    return (
        <span className="Percentile-Bar">
          <span className="Percentile-Bar-Item"
                style={{ width: widthStyle, backgroundColor: color }}>
          </span>
        </span>
    )
}

export const SkillDescription = ({ name, color, percentage }) => (
  <span className="Skill-Description">

    <Link extern nohighlight className="Skill-Tag"
          href={"https://github.com/maxi-k?tab=repositories&language=" + encodeURIComponent(name)}>
      <span className="Skill-ColorTag" style={{ backgroundColor: color }}> </span>
      <span className="Skill-NameTag">{name}</span>
      <span className="Skill-PercentageTag">{(percentage * 100).toPrecision(2)}%</span>
    </Link>
  </span>
)

export const SkillLevels = (props) => {
    const skills = useSkills()
    if (!skills || skills.length === 0) {
        return "";
    }
  const top = skills.slice(0, 7).reduce((sum, skill) => sum + skill.codeSize, 0)
    const perc = skills.slice(0, 7).map(skill => ({...skill, percentage: skill.codeSize / top }))
    return (
        <div className="SkillLevels">
          <MultiColorBar items={perc}/>
          <div className="SkillLevels-Descriptions">
            { perc.map(skill => <SkillDescription key={skill.name} {...skill} />) }
          </div>
        </div>
    )
}
