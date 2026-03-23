import { NextRequest, NextResponse } from 'next/server';
import { readFileSync, existsSync, statSync } from 'fs';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const format = searchParams.get('format') || 'app';

    const projectRoot = process.cwd();

    // Windows App (full portable zip)
    if (format === 'windows' || format === 'exe' || format === 'portable') {
      const zipPath = join(projectRoot, 'public', 'download', 'BRUTAL-FPS-Windows-Portable.zip');
      
      if (existsSync(zipPath)) {
        const fileBuffer = readFileSync(zipPath);
        const stat = statSync(zipPath);
        
        return new NextResponse(fileBuffer, {
          status: 200,
          headers: {
            'Content-Type': 'application/zip',
            'Content-Disposition': 'attachment; filename="BRUTAL-FPS-Windows-Portable.zip"',
            'Content-Length': stat.size.toString(),
            'Cache-Control': 'public, max-age=3600',
          },
        });
      }
    }

    // Standalone HTML app
    if (format === 'app' || format === 'standalone' || format === 'html') {
      const htmlPath = join(projectRoot, 'public', 'brutal-fps-standalone.html');
      
      if (existsSync(htmlPath)) {
        const htmlContent = readFileSync(htmlPath, 'utf-8');
        
        return new NextResponse(htmlContent, {
          status: 200,
          headers: {
            'Content-Type': 'text/html',
            'Content-Disposition': 'attachment; filename="BRUTAL-FPS.html"',
            'Content-Length': Buffer.byteLength(htmlContent, 'utf-8').toString(),
            'Cache-Control': 'public, max-age=3600',
          },
        });
      }
    }

    // Fallback - try to return HTML
    const htmlPath = join(projectRoot, 'public', 'brutal-fps-standalone.html');
    
    if (existsSync(htmlPath)) {
      const htmlContent = readFileSync(htmlPath, 'utf-8');
      
      return new NextResponse(htmlContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/html',
          'Content-Disposition': 'attachment; filename="BRUTAL-FPS.html"',
          'Content-Length': Buffer.byteLength(htmlContent, 'utf-8').toString(),
        },
      });
    }

    return NextResponse.json(
      { error: 'Download not found' },
      { status: 404 }
    );

  } catch (error) {
    console.error('Download error:', error);
    return NextResponse.json(
      { error: 'Failed to create download package' },
      { status: 500 }
    );
  }
}
