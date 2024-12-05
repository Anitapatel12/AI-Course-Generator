import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TopicDescription() {
  return (
    <div className='mx-20 lg:mx-44'>
        {/*Input topic*/}
        <div className='mt-5'>
            <label>
                Write the topic for which you want to generate a course(e.g.Python Course, yoga, etc.):
            </label>
            <Input placeholder ={'Topic'}/>
        </div>
        <div className='mt-5'>
            <label>Tell us more about your course, what you want to include in the course(option)</label>
            <Textarea placeholder='About your course'/>
        </div>
        {/*Text Area Desc */}
    </div>
  )
}

export default TopicDescription