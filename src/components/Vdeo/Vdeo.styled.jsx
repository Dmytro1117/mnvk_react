import styled from 'styled-components';

export const Section = styled.div`
  width: 1280px;
  padding: 32px 16px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const VideoTitle = styled.h2`
  font-weight: 600;
  margin-bottom: 28px;
  font-size: 32px;
  line-height: 1.2;
  margin-top: 0;
  text-align: right;
  text-shadow: 2px 2px 4px #000000;
`;

export const VideoFile = styled.video`
  width: 500px;
  height: 300px;
  object-fit: cover;
  border-radius: 10px;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
`;
