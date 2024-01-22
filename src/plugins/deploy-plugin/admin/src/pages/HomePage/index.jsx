/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { RocketIcon } from '../../components/RocketIcon/RocketIcon';
import { CupIcon } from '../../components/CupIcon/CupIcon';
import * as S from './homepage.styles'

const HomePage = () => {

  //const response = await axios.get('/deploy-plugin/config', {});

  const [config, setConfig] = useState({});
  const [isConfigLoading, setIsConfigLoading] = useState(true);

  const [isDeploying, setIsDeploying] = useState(false);
  const [isDeployed, setIsDeployed] = useState(false);
  const [deployError, setDeployError] = useState(null);
  
  const getConfig = async () => {
    const response = await axios.get('/deploy-plugin/config', {});
    setConfig(response.data);
    setIsConfigLoading(false)
  }

  const launchDeployRequest = async () => {
    setDeployError(null);
    setIsDeploying(true);
    try {
      const post_result = await axios.post(config.post_url, {});
      if (post_result.status === 200 || post_result.status === 201) {
        setIsDeployed(true);
      }
    } catch (error) {
      setDeployError(error.message);
    } finally {
      setIsDeploying(false);
    }
  }

  useEffect(() => {
    getConfig();
  }, []);

  return (
    <S.HomePageContainer>
      {isConfigLoading ?
        <S.Loading>Loading...</S.Loading>
      :
        <S.DeployContainer>
          {isDeployed ?
            <S.ResultContainer>
              <CupIcon />
              {config?.result_text}
            </S.ResultContainer>
          :
          <S.DeployButton  onClick={launchDeployRequest}>
            <RocketIcon />
            {isDeploying ? "Loading ..." : config?.button_text}
          </S.DeployButton>
          }
          <S.ErrorText>{deployError && deployError}</S.ErrorText>
      </S.DeployContainer>
    }
    </S.HomePageContainer>
  );
};

export default HomePage;
