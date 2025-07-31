import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import { LiaBookSolid } from "react-icons/lia";
import { AiOutlineLink } from "react-icons/ai";

const CardWrapper = styled.div`
  max-width: 30rem;
  min-height: 20rem;
  border: 1.5px solid ${props => props.theme.colors.onyx};
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colors.background};
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const PreviewSection = styled.div`
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
  border: 1px solid #ddd;
  background: white;
  min-height: 150px;
  
  .preview-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    background: #f5f5f5;
  }
  
  .preview-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    color: #999;
    font-style: italic;
    background: #f5f5f5;
  }
  
  .preview-error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    color: #999;
    background: #f5f5f5;
    font-size: 0.9rem;
  }
  
  .preview-iframe {
    width: 100%;
    height: 200px;
    border: none;
    background: #f5f5f5;
    transform: scale(0.8);
    transform-origin: top left;
    width: 125%;
    height: 250px;
    
    /* Hide scrollbars */
    &::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  .iframe-container {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    background: #f5f5f5;
  }
  
  .no-preview {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    background: linear-gradient(135deg, #1f6eeb 0%, #4a90e2 100%);
    color: white;
    font-weight: 600;
    font-size: 1.1rem;
    text-align: center;
    padding: 1rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Name = styled.p`
  color: #1f6eeb;
  font-weight: 800;
  font-size: 1.5rem;
  margin: 0;
  flex: 1;
  transition: color 0.3s ease;
`;

const TechStack = styled.p`
  font-weight: 500;
  margin: 0.5rem 0;
  color: ${props => props.theme.colors.subText};
  transition: color 0.3s ease;
`;

const Description = styled.p`
  margin: 0.5rem 0;
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  flex: 1;
  transition: color 0.3s ease;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #1f6eeb;
  color: white;
  text-decoration: none;
  border-radius: 0.5rem;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-top: 1rem;
  justify-content: center;
  
  &:hover {
    background: #4a90e2;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(31, 110, 235, 0.3);
  }
`;

const Card = ({ data }) => {
  const { name, techStacks, description, url, disable } = data;
  const [previewData, setPreviewData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (url && !disable) {
      setLoading(true);
      setError(false);
      
      // Try to get preview using Microlink API (free tier available)
      fetch(`https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`)
        .then(response => response.json())
        .then(data => {
          if (data.status === 'success' && data.data.screenshot) {
            setPreviewData({
              title: name,
              url: url,
              image: data.data.screenshot.url
            });
          } else {
            // Fallback to iframe preview
            setPreviewData({
              title: name,
              url: url,
              useIframe: true
            });
          }
          setLoading(false);
        })
        .catch(err => {
          console.error('Error fetching preview:', err);
          // Fallback to iframe preview
          setPreviewData({
            title: name,
            url: url,
            useIframe: true
          });
          setLoading(false);
        });
    }
  }, [url, name, disable]);

  return (
    <CardWrapper>
      <PreviewSection>
        {loading && (
          <div className="preview-loading">Loading preview...</div>
        )}
        
        {previewData && !loading && !error && (
          <>
            {previewData.image && (
              <img 
                src={previewData.image} 
                alt={previewData.title}
                className="preview-image"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
            
            {previewData.useIframe && (
              <div className="iframe-container">
                <iframe
                  src={url}
                  className="preview-iframe"
                  title={previewData.title}
                  onError={() => setError(true)}
                  sandbox="allow-scripts allow-same-origin"
                />
              </div>
            )}
          </>
        )}
        
        {error && (
          <div className="preview-error">Preview unavailable</div>
        )}
        
        {(!url || disable) && (
          <div className="no-preview">
            <LiaBookSolid size={40} />
            <span style={{ marginLeft: '0.5rem' }}>{name}</span>
          </div>
        )}
      </PreviewSection>
      
      <ContentSection>
        <div>
          <Title>
            <LiaBookSolid size={30} />
            <Name>{name}</Name>
          </Title>
          
          <TechStack style={{ fontStyle: "italic" }}>{techStacks}</TechStack>
          <Description>{description}</Description>
        </div>
        
        {url && (
          <LinkButton href={url} target="_blank" rel="noopener noreferrer">
            <AiOutlineLink size={20} />
            View Project
          </LinkButton>
        )}
      </ContentSection>
    </CardWrapper>
  );
};

export default Card;
