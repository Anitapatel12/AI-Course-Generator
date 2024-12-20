
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

function TopicDescription() {
  return (
    <div className='mx-20 lg:mx-44'>
      {/* Input Text */}
      <div className='mt-7'>
        <label>💡Write the topic for which you want to generate a course (e.g., Python, Yoga, etc.)</label>
        <Input placeholder="Topic" />
      </div>
      <div className='mt-5'>
        <label>📝Tell us more about your course, what you want to include in the course</label>
        <Textarea placeholder={'About your course'} />
      </div>
    </div>
  );
}

export default TopicDescription