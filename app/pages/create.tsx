/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import styled from 'styled-components';
import React, { Suspense, useCallback, useEffect, useMemo, useState } from 'react';
import dynamic from 'next/dynamic';
import { Form } from '../components';
import { InlineGrid } from '../components/styled/InlineGrid.styled';
import HttpController from '../controllers/HttpController';
import { Button } from '../components/styled/Button.styled';
import { latLng, LatLngBounds, latLngBounds } from 'leaflet';

interface DisplayProps {
  previewImg: string;
  modelUrl: string;
}

const StyledCreatePage = styled.div`
  display: flex;
  padding-bottom: 10rem;
  flex-direction: column;
  gap: 5rem;
  position: relative;

  .frame {
    width: 100%;
  }
  .image-demo {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .frame-container {
    position: relative !important;
    .shirt-img {
      position: absolute;
      height: 100%;

      left: 50%;
      transform: translate(-50%);
      top: 0;
    }

    #loading-image {
      display: flex;
      align-items: center;
      font-family: Raleway;
      justify-content: center;
      position: absolute;
      top: 45%;
      left: 50%;
      text-align: center;
      transform: translate(-50%, -50%);
      height: 576px;
      width: 575px;
      color: white;
      font-size: 30px;
    }
  }
`;

const StyledHeader = styled.h1`
  margin: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 63px;
  font-weight: 900;
  color: white;

  ::before {
    content: '${props => props.children && props.children.toString()}';
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #aad725;
    opacity: 0.4;
    color: transparent;
    position: absolute;
    margin-top: 5px;
    margin-left: 5px;
    z-index: -1;
  }
`;

const Create: NextPage = () => {
  // Disable SSR for Map component
  // useMemo() disables unnecessary component updates which could cause Map flickering

  const Map = useMemo(
    () =>
      dynamic(() => import('../components/Map/Map.component'), {
        ssr: false,
        loading: () => <p>Map is loading</p>,
      }),
    [],
  );

  const [selectedBounds, setSelectedBounds] = useState<LatLngBounds | null>(null);
  const [displayProps, setDisplayProps] = useState<DisplayProps>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async (data: any, preview: boolean) => {
    console.log(preview);
    if (selectedBounds) {
      const design = {
        title: data.title,
        description: data.description,
        is_preview: preview,
        email: data.email,
        west: selectedBounds.getWest(),
        north: selectedBounds.getNorth(),
        east: selectedBounds.getEast(),
        south: selectedBounds.getSouth(),
      };
      const res = await HttpController.generateDesign(design);

      setDisplayProps({
        modelUrl: `http://humboldtapparel.herokuapp.com/places/${res.design_uuid}`,
        previewImg: res.shirt_img,
      });
    } else {
      console.log('No bounds selected');
    }
    setIsLoading(false);
  };
  return (
    <StyledCreatePage>
      <StyledHeader>SELECT A PLACE</StyledHeader>
      <Map selectedBounds={selectedBounds} setSelectedBounds={setSelectedBounds} />
      <InlineGrid>
        <Form onSubmit={onSubmit} setIsLoading={setIsLoading} />
        <div className="image-demo">
          <div className="frame-container">
            <svg
              className="frame"
              width="575"
              height="576"
              viewBox="0 0 575 576"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M485.427 9.80224L566 9.80225L566 90.375" stroke="#AAD725" strokeWidth="18" />
              <path d="M9 90.375V9.80225H89.5727" stroke="#AAD725" strokeWidth="18" />
              <path d="M89.5727 566.934L9 566.934L9 486.361" stroke="#AAD725" strokeWidth="18" />
              <path d="M566 486.361L566 566.934L485.427 566.934" stroke="#AAD725" strokeWidth="18" />
            </svg>
            {!displayProps && isLoading ? (
              <p id="loading-image">Loading image...</p>
            ) : (
              !isLoading &&
              displayProps && (
                <img className="shirt-img" src={displayProps.previewImg} alt={'Shirt design demonstration'} />
              )
            )}
          </div>
          {displayProps && (
            <a target="_blank" rel="noreferrer" href={displayProps.modelUrl}>
              <Button centered>View place model</Button>
            </a>
          )}
        </div>
      </InlineGrid>
    </StyledCreatePage>
  );
};
export default Create;
