import { Typography } from '@mui/material'
import React from 'react'
import YoutubeEmbed from './VideoEmbed'

const Articles = () => {
  return (
    <>
        <Typography variant='h2' sx={{ fontSize: 45, m: 1, fontStyle: "italic" }}> Titulo del artículo </Typography>
        <YoutubeEmbed embedId='SvJwEiy2Wok'/>
        <p>fdgdfgdfgdfgd ffgdfgdfgdfgdf fdgdfgdfgdfgdfg dfgdfgdfgfgd fgdfgdfgdfgdfg</p>
    </>
  )
}

export default Articles