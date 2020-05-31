import React, { useState } from "react";

import styled from 'styled-components';
import { theme, mixins, media } from '../styles';
const { colors, fontSizes, fonts } = theme;

import jobs from '../static/jobs';


const StyledTabContent = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding-top: 12px;
  padding-left: 30px;
  font-size: 18px;
  color: ${colors.lightestSlate};
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
  ul {
    ${mixins.fancyList};
  }
  a {
    ${mixins.inlineLink};
  }
`;

const StyledJobTitle = styled.h4`
  color: ${colors.lightestSlate};
  font-size: ${fontSizes.xxl};
  font-weight: 500;
  margin-bottom: 5px;
`;

const StyledCompany = styled.span`
  color: ${colors.green};
`;

const StyledJobDetails = styled.h5`
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.smish};
  font-weight: normal;
  letter-spacing: 0.05em;
  color: ${colors.lightSlate};
  margin-bottom: 30px;
  svg {
    width: 15px;
  }
`;


const Experience = (props) => {
    const [activeTabId, setActiveTabId] = useState(0);

    return (
        <div className="col-lg-12">
            <div className="row justify-content-md-center">
                <div className="col col-lg-10">
                    <div className="card about-card">
                        <div className="card-body">
                            <h3 className="heading">Where I've Worked</h3>

                            <div className="row">
                                <div className="col-lg-2">
                                    <div className="experience-list">
                                        <ul className="job-tabs">
                                            {
                                                jobs && jobs.map((job, i) => {
                                                    return (
                                                        <li key={i}>
                                                            <button
                                                                onClick={() => setActiveTabId(i)}
                                                                className={activeTabId === i ? `btn job-button active-tab` : `btn job-button`}
                                                            >
                                                                {job.company}
                                                            </button>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-lg-10 ml-0">
                                    {jobs &&
                                    jobs.map((job , i) => {
                                        return (
                                            <StyledTabContent
                                                key={i}
                                                isActive={activeTabId === i}
                                                id={`panel-${i}`}
                                                role="tabpanel"
                                                aria-labelledby={`tab-${i}`}
                                                tabIndex={activeTabId === i ? '0' : '-1'}
                                                hidden={activeTabId !== i}
                                            >
                                                <StyledJobTitle>
                                                    <span>{ job.title }</span>
                                                    <StyledCompany>
                                                        <span>&nbsp;@&nbsp;</span>
                                                        <a href={job.url} target="_blank" className="link" rel="nofollow noopener noreferrer">
                                                            {job.company}
                                                        </a>
                                                    </StyledCompany>
                                                </StyledJobTitle>

                                                <StyledJobDetails>
                                                    <span>{job.range}</span>
                                                </StyledJobDetails>
                                                <div dangerouslySetInnerHTML={{ __html: job.work }} />
                                            </StyledTabContent>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Experience;