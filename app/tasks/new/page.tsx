'use client'
import React from 'react'
import { Button, TextArea, TextField } from '@radix-ui/themes'

const NewTaskPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <TextArea placeholder='Description'/>
        <Button>Submit New Task</Button>
    </div>
  )
}

export default NewTaskPage