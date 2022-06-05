import React, { useState } from 'react'
import { CloseButton } from '../CloseButton'
import BugImage from './../assets/bug.svg'
import IdeiaImage from './../assets/ideia.svg'
import ThoughtImage from './../assets/thought.svg'
import { FeedbackContentStep } from './Steps/FeedbackContentStep'
import { FeedbackSuccessStep } from './Steps/FeedbackSuccessStep'
import { FeedbackTypeStep } from './Steps/FeedbackTypesStep'

export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: BugImage,
      alt: 'Imagem de um isento'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: IdeiaImage,
      alt: 'Imagem de uma lampada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: ThoughtImage,
      alt: 'Imagem de um balão de pensamento'
    }
  }
}

export type FeedBack = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedBack | null>(null)
  const [feedbackSent, setFeedbackSent] = useState(false)

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer>
        Feito por
        <a
          className="underline underline-offset-2"
          href="https://github.com/rafaelmasselli"
        >
          Rafael Masselli
        </a>
      </footer>
    </div>
  )
}
