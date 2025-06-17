
"use client";
import React from 'react';
import PageShell from '@/components/chimera/PageShell';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface SubPageLayoutProps {
  children: React.ReactNode;
  backButtonHref?: string; 
  backButtonText?: string; 
}

export default function SubPageLayout({ 
  children, 
  backButtonHref = "/", 
  backButtonText = "&larr; Back to Project Overview" 
}: SubPageLayoutProps) {

  return (
    <PageShell>
      <div className="container mx-auto px-6 py-12 pt-24 md:pt-32">
        <div className="mb-12">
          <Link href={backButtonHref} passHref>
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <span dangerouslySetInnerHTML={{ __html: backButtonText }} />
            </Button>
          </Link>
        </div>
        {children}
      </div >
    </PageShell>
  );
}
