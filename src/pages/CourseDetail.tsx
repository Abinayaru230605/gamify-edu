import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { courses, videos } from "@/lib/mockData";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === courseId);
  const courseVideos = videos.filter((v) => v.courseId === courseId);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [comments, setComments] = useState<Record<string, { text: string; user: string; time: string }[]>>({});
  const [commentText, setCommentText] = useState("");

  if (!course) {
    return (
      <div className="flex h-64 items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-muted-foreground">Course not found</p>
          <Link to="/courses" className="mt-2 text-sm text-primary hover:underline">← Back to courses</Link>
        </div>
      </div>
    );
  }

  const filteredVideos = selectedTopic ? courseVideos.filter((v) => v.topic === selectedTopic) : courseVideos;
  const currentVideo = courseVideos.find((v) => v.id === activeVideo);

  const addComment = (videoId: string) => {
    if (!commentText.trim()) return;
    setComments((prev) => ({
      ...prev,
      [videoId]: [...(prev[videoId] || []), { text: commentText, user: "Arjun Sharma", time: "Just now" }],
    }));
    setCommentText("");
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/courses" className="hover:text-foreground">Courses</Link>
        <span>/</span>
        <span className="text-foreground">{course.title}</span>
      </div>

      {/* Course header */}
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="flex items-start gap-4">
          <span className="text-5xl">{course.icon}</span>
          <div>
            <p className="text-sm font-medium text-primary">{course.code} • Semester {course.semester}</p>
            <h1 className="mt-1 text-2xl font-display font-bold text-foreground">{course.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {course.credits} Credits • {course.totalVideos} videos • +{course.xpReward} XP per video
            </p>
            <div className="mt-3 w-64">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Overall Progress</span>
                <span className="font-semibold text-xp">{course.progress}%</span>
              </div>
              <div className="mt-1 h-2.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full gradient-xp" style={{ width: `${course.progress}%` }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Player */}
      <AnimatePresence>
        {currentVideo && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden rounded-xl border border-border bg-card"
          >
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1`}
                title={currentVideo.title}
                className="h-full w-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-lg font-display font-semibold text-foreground">{currentVideo.title}</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {currentVideo.duration} • {currentVideo.views.toLocaleString()} views • +{currentVideo.xp} XP
                  </p>
                </div>
                <button onClick={() => setActiveVideo(null)} className="rounded-lg border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground">
                  ✕ Close
                </button>
              </div>

              {/* Comments */}
              <div className="mt-5 border-t border-border pt-4">
                <h3 className="text-sm font-semibold text-foreground">
                  💬 Discussion ({(comments[currentVideo.id] || []).length})
                </h3>
                <div className="mt-3 flex gap-2">
                  <input
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && addComment(currentVideo.id)}
                    placeholder="Add a comment..."
                    className="flex-1 rounded-lg border border-border bg-muted px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                  />
                  <button
                    onClick={() => addComment(currentVideo.id)}
                    className="rounded-lg gradient-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                  >
                    Post
                  </button>
                </div>
                <div className="mt-3 space-y-2">
                  {(comments[currentVideo.id] || []).map((c, i) => (
                    <div key={i} className="rounded-lg bg-muted p-3">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-semibold text-foreground">{c.user}</span>
                        <span className="text-muted-foreground">{c.time}</span>
                      </div>
                      <p className="mt-1 text-sm text-foreground">{c.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Topic filter */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setSelectedTopic(null)}
          className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${!selectedTopic ? "gradient-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:border-primary/40"}`}
        >
          All Topics
        </button>
        {course.topics.map((topic) => (
          <button
            key={topic}
            onClick={() => setSelectedTopic(topic)}
            className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${selectedTopic === topic ? "gradient-primary text-primary-foreground" : "border border-border bg-card text-foreground hover:border-primary/40"}`}
          >
            {topic}
          </button>
        ))}
      </div>

      {/* Video grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredVideos.map((video, i) => (
          <motion.button
            key={video.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => setActiveVideo(video.id)}
            className={`group rounded-xl border bg-card p-4 text-left transition-all hover:border-primary/40 ${activeVideo === video.id ? "border-primary glow-primary" : "border-border"}`}
          >
            {/* Thumbnail */}
            <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
              <img
                src={`https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`}
                alt={video.title}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
              />
              <span className="absolute bottom-1.5 right-1.5 rounded bg-background/80 px-1.5 py-0.5 text-xs font-medium text-foreground backdrop-blur-sm">
                {video.duration}
              </span>
            </div>
            <h3 className="mt-3 line-clamp-2 text-sm font-semibold text-foreground">{video.title}</h3>
            <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
              <span>{video.views.toLocaleString()} views</span>
              <span>❤️ {video.likes}</span>
              <span className="ml-auto font-semibold text-xp">+{video.xp} XP</span>
            </div>
          </motion.button>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="flex h-32 items-center justify-center rounded-xl border border-dashed border-border">
          <p className="text-sm text-muted-foreground">No videos available for this topic yet</p>
        </div>
      )}
    </div>
  );
};

export default CourseDetail;
