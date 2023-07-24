import React, { useRef, useEffect } from 'react'
import dayjs from 'dayjs';
import { Box, Typography, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo'
import { Radio, RadioGroup, FormControlLabel, FormLabel } from '@mui/material';

import { Editor } from '@tinymce/tinymce-react'

import { setInformations, getInformations } from '../../redux/slices/article.slice'
import { useSelector, useDispatch } from 'react-redux'

import styles from './Articles.module.css'

const Informations = () => {
    const dispatch = useDispatch()
    const INFORMATIONS = useSelector(getInformations)

    const editorRef1 = useRef(null)
    const editorRef2 = useRef(null)

    const dateDuJour = new Date().toLocaleDateString('en-EN')

    useEffect(() => {
        dispatch(setInformations({ ...INFORMATIONS, dateCrea: dateDuJour, visible: false }));
    }, [])

    const handleChangeVisibility = (event) => {
        const isVisible = event.target.value === "Yes";
        dispatch(setInformations({ ...INFORMATIONS, visible: isVisible }))
    }

    return (
        <Box >
            <Box sx={{ backgroundColor: '#666967', color: 'white' }}>
                <Typography sx={{ p: '5px' }}>General parameter</Typography>
            </Box >

            <Box sx={{ backgroundColor: '#f3f3f3', color: '#666967', px: 4 }}>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DateTimePicker']} sx={{ width: '20%' }} >
                            <DemoItem label="Date" >
                                <DatePicker
                                    defaultValue={dayjs(dateDuJour)}
                                    className={styles.basic}
                                    onChange={(date) => { dispatch(setInformations({ ...INFORMATIONS, dateCrea: date.format('DD/MM/YYYY') })) }}
                                />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                    <Box>
                        <FormLabel id="radio-visible" sx={{ mx: 4, fontSize: '0.875rem' }}>Visible</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            defaultValue="No"
                            onChange={handleChangeVisibility}
                        >
                            <FormControlLabel value='Yes' control={<Radio color="success" size="small" />} label={<span style={{ fontSize: '0.875rem' }}>Yes</span>} />
                            <FormControlLabel value='No' control={<Radio color="error" size="small" />} label={<span style={{ fontSize: '0.875rem' }}>No</span>} />
                        </RadioGroup>
                    </Box>
                </Box><br></br>

                <TextField
                    sx={{ mb: 2 }}
                    className={styles.basic}
                    size="small"
                    label="Title"
                    variant="outlined"
                    onChange={(event) => { dispatch(setInformations({ ...INFORMATIONS, title: event.target.value })) }}
                />
                <TextField
                    sx={{ mb: 4 }}
                    className={styles.basic}
                    size="small"
                    label="Author"
                    variant="outlined"
                    onChange={(event) => { dispatch(setInformations({ ...INFORMATIONS, author: event.target.value })) }}
                />

                <FormLabel  >Chapeau :</FormLabel>
                <Editor
                    apiKey={process.env.REACT_APP_TINY_API_KEY}
                    onInit={(evt, editor) => {
                        editorRef1.current = editor;
                    }}
                    initialValue=""
                    init={{
                        height: 200,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'emoticons',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help | emoticons',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    }}
                    onEditorChange={(content) => { dispatch(setInformations({ ...INFORMATIONS, chapeau: content })) }}
                /><br></br>
                <FormLabel  >Description :</FormLabel>
                <Editor
                    apiKey={process.env.REACT_APP_TINY_API_KEY}
                    onInit={(evt, editor) => {
                        editorRef2.current = editor;
                    }}
                    initialValue=""
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen', 'emoticons',
                            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                            'bold italic forecolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help | emoticons',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                    onEditorChange={(content) => { dispatch(setInformations({ ...INFORMATIONS, description: content })) }}
                />
            </Box >
        </Box>
    )
}

export default Informations