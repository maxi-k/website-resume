import React from 'react'
import { t } from 'content';
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
          href={`${t('person.githubUrl')}?tab=repositories&q=&type=&language=`
                + encodeURIComponent((uriKey || name.toLowerCase()).trim())}>
      <span className="Skill-ColorTag" style={{ backgroundColor: color }}> </span>
      <span className="Skill-NameTag">{name}</span>
      <span className="Skill-PercentageTag">{(percentage * 100).toPrecision(2)}%</span>
    </Link>
  </span>
)

export const SkillLevels = (props) => {
  const data = useSkills();
  if (!data) {
    return <div className="SkillLevels-Loading"><Loader/></div>
  }
  const { cached, skills } = data;
  if (!!skills && !!skills.error) {
    return <div className="SkillLevels-Error"/>
  } else if (!skills || skills.length === 0) {
    return <div className="SkillLevels-Loading"><Loader/></div>
  }
  const sum = skills.reduce((sum, skill) => sum + skill.codeSize, 0)
  const perc = skills.map(skill => ({...skill, percentage: skill.codeSize / sum }))
  const top = perc.filter(skill => skill.percentage >= 0.03);
  const restPerc = 1 - top.reduce((sum, skill) => sum + skill.percentage, 0);
  top.push({ name: t('skills.others'), color: "#e8e8e8", percentage: restPerc, uriKey: " " })
  return (
    <div className="SkillLevels">
      <MultiColorBar items={top}/>
      <div className="SkillLevels-Descriptions">
        { top.map(skill => <SkillDescription key={skill.name} {...skill} />) }
      </div>
    </div>
  )
}

const Loader = () => {
  const width = 400;
  const height = 150;
  const circleRadius = 4;
  const circleData = (count, sizeCount = undefined) => [...Array(count).keys()].map((n) => {
    const sizeCnt = sizeCount || count;
    const size = 2 * circleRadius + width / (sizeCnt + 1) / 2
    return {size: size, offset: (width * (n + 1) / (count + 1)) - size/2}
  });
  const circleElements = (y) => ({size, offset}) =>
        <React.Fragment key={offset}>
          <circle cx={"" + offset}  cy={"" + y} r={circleRadius} />
          <rect x={"" + (offset + 2 * circleRadius)} y={y - 3} rx="1" ry="1" width={"" + (size - 2 * circleRadius)} height="6" />
        </React.Fragment>;
  const colors = Object.freeze(["#f3f3f3", "#e8e8e8"]);
  return (
    <svg role="img" aria-labelledby="loading-aria" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
  <title id="loading-aria">Loading...</title>
  <rect
    x="0"
    y="0"
    width="100%"
    height="100%"
    clipPath="url(#clip-path)"
    style={{fill: 'url("#fill")' }}
  ></rect>
  <defs>
    <clipPath id="clip-path">
        <rect x="4" y="25" rx="5" ry="5" width="394" height="8" />
      { circleData(5).map(circleElements(48)) }
      { circleData(4, 5).map(circleElements(64)) }
    </clipPath>
    <linearGradient id="fill">
      <stop
        offset="0.599964"
        stopColor={colors[0]}
        stopOpacity="1">
        <animate
          attributeName="offset"
          values="-2; -2; 1"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"></animate>
      </stop>
      <stop
        offset="1.59996"
        stopColor={colors[1]}
        stopOpacity="1">
        <animate
          attributeName="offset"
          values="-1; -1; 2"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"></animate>
      </stop>
      <stop
        offset="2.59996"
        stopColor={colors[0]}
        stopOpacity="1">
        <animate
          attributeName="offset"
          values="0; 0; 3"
          keyTimes="0; 0.25; 1"
          dur="2s"
          repeatCount="indefinite"></animate>
      </stop>
    </linearGradient>
  </defs>
</svg>
  );
}
