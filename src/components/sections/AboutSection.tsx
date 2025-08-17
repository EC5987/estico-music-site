import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Photo + Text using GRID */}
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-6 items-start">
        {/* Photo (col 1) */}
        <div className="flex-shrink-0 mx-auto md:mx-0">
          <img
            src="/esteban.jpg"
            alt="Esteban Calderón"
            className="w-44 h-44 md:w-56 md:h-56 rounded-full shadow-lg object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* First paragraph (col 2) */}
        <p className="indent-6 text-muted-foreground leading-relaxed">
          Founded by producer and mixing engineer Esteban Calderón, ESTICO Music is a boutique studio based in the San Fernando Valley, Los Angeles. With over a decade of experience, Esteban specializes in music production, mixing, and mastering, working closely with artists to craft records that are both emotionally resonant and sonically precise.
        </p>

        {/* Remaining paragraphs span FULL width under both columns */}
        <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
          <p className="indent-6">
            Esteban works at the intersection of artistry and precision, blending the warmth of pop, rock, and acoustic singer-songwriter styles with the textures of analogue synths and electronic soundscapes. As a guitarist first, he brings an organic musicality to every project, ensuring that even the most experimental productions remain grounded in authenticity.
          </p>
<br></br>
          <p className="indent-6">
            His versatility spans from intimate artist records to high-profile collaborations, with credits including HBO: Succession (LAS, BPO) and Burden of Proof (LAS), Nike, Angel Studios, and Fox Sports. He has also collaborated with artists such as Connor Duermit, Jay Alan, Becca Roth, Alt Bloom, Cait, and Alyson Stoner. In 2023, he composed and conducted an original string arrangement at Carnegie Hall, a milestone that highlights his range and adaptability as both a musician and producer.
          </p>
        </div>
      </div>

      {/* Quote (full width) */}
      <div className="pt-4 border-t border-border">
        <p className="text-sm text-center text-muted-foreground italic">
          "Excellence in every note, precision in every mix."
        </p>
      </div>
    </div>
  );
};