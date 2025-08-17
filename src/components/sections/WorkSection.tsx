import React from 'react';

export const WorkSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <p className="text-center text-muted-foreground">
      A playlist of our work across genres and years
      </p>

      <div className="w-full max-w-3xl mx-auto">
  <iframe
    data-testid="embed-iframe"
    style={{ borderRadius: '12px' }}
    src="https://open.spotify.com/embed/playlist/3JyDzk87HglKjk5S2pivxy?utm_source=generator&theme=0"
    width="100%"
    height="352"
    frameBorder="0"
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="ESTICO Music — Selected Work"
  />
</div>

    </div>
  );
};
