import React, { Suspense } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './VideoPlayerModal.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'
import { Loader } from 'shared/ui/Loader/Loader'

interface VideoPlayerModalProps {
  className?: string
  trailerUrl: string
  trailerId: string
  isOpen: boolean
  onClose: () => void
}

export const VideoPlayerModal = ({ className, trailerUrl, trailerId, isOpen, onClose }: VideoPlayerModalProps) => {
  return (
    <Modal className={classNames(cls.VideoPlayerModal, {}, [className])} isBackground={false} isOpen={isOpen} onClose={onClose} lazy>
      <Suspense fallback={<Loader />}>
        <VideoPlayer trailerId={trailerId} trailerUrl={trailerUrl} />
      </Suspense>
    </Modal>
  )
}