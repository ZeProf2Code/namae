import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { FaTwitter, FaGlobe } from 'react-icons/fa'

import { useDeferredState } from './hooks/state'
import { CardHolder } from './components/Card'
import GithubCard from './components/GithubCard'
import DomainCard from './components/DomainCard'
import HomebrewCard from './components/HomebrewCard'
import TwitterCard from './components/TwitterCard'
import SlackCard from './components/SlackCard'
import NpmCard from './components/NpmCard'
import JsOrgCard from './components/JsOrgCard'
import PypiCard from './components/PypiCard'
import S3Card from './components/S3Card'
import CratesioCard from './components/CratesioCard'
import './App.css'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export default function App() {
  const [query, setQuery] = useDeferredState(1000)

  function onChange(e) {
    setQuery(e.target.value)
  }

  return (
    <>
      <GlobalStyle />
      <Header>
        <Logo>namae.dev</Logo>
        <SubHeader>name your new project</SubHeader>
        <Input
          onChange={onChange}
          type="text"
          placeholder="awesome-package"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
      </Header>
      {query && query.length > 0 ? (
        <Result>
          <ResultHeader>Result for {query}</ResultHeader>
          <CardHolder>
            <GithubCard name={query} />
            <DomainCard name={query} />
            <HomebrewCard name={query} />
            <TwitterCard name={query} />
            <SlackCard name={query} />
            <NpmCard name={query} />
            <JsOrgCard name={query} />
            <PypiCard name={query} />
            <CratesioCard name={query} />
            <S3Card name={query} />
          </CardHolder>
        </Result>
      ) : null}
      <Footer>
        <p>
          Made by U with{' '}
          <span role="img" aria-label="love">
            🐤
          </span>{' '}
          <a
            href="https://twitter.com/uetschy"
            target="_blank"
            rel="noopener noreferrer">
            <FaTwitter />
          </a>{' '}
          <a href="https://uechi.io" target="_blank" rel="noopener noreferrer">
            <FaGlobe />
          </a>
        </p>
      </Footer>
    </>
  )
}

const Header = styled.header`
  text-align: center;
`

const Logo = styled.div`
  margin: 15px 0 5px;
  font-family: sans-serif;
  font-weight: bold;
`

const SubHeader = styled.div`
  font-size: 0.8em;
  font-style: italic;
`

const Input = styled.input`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  outline: none;
  font-size: 4rem;
  font-family: monospace;
  border: none;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 800px) {
    font-size: 2rem;
  }
`

const Result = styled.div`
  margin-top: 40px;
`

const ResultHeader = styled.div`
  padding-left: 20px;
  margin-bottom: 20px;
  font-size: 1.2rem;
  font-weight: bold;
`

const Footer = styled.footer`
  margin-top: 40px;
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 0.8em;
`
