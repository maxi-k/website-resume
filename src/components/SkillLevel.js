import React from 'react'
import { Progress, Icon } from 'semantic-ui-react'
import { usePrimaryColor } from "../style.js"


const SkillLevel = ({ children, level, githubFilter }) => {
    const color = usePrimaryColor();
    console.log(color);
    return (
        <div className="SkillLevel-Wrapper">
          <Progress
            percent={level}
            color={color}
            size="tiny" />
          {children}
          {githubFilter &&
              <>
                    <br />
                        <a href={"https://github.com/maxi-k?tab=repositories&q=&type=&language="
                                 + encodeURIComponent(githubFilter)}
                               target="_new" style={{ float: "right" }}>
                              <Icon name="long arrow alternate right" />
                              Projects on GitHub
                            </a>
                  </>
              }
        </div>
    )
}


export default SkillLevel;
