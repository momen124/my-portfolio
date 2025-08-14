import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BlogPost } from '../types/portfolio';

const BlogStub = async () => {
  let mockPosts: BlogPost[] = [];
  const s3Url = process.env.NEXT_PUBLIC_S3_CONTENT_URL;

  // Type guard to ensure s3Url is defined
  if (s3Url) {
    try {
      const res = await fetch(s3Url, { cache: 'no-store' });
      if (res.ok) {
        const data = await res.json();
        mockPosts = data.blog || [];
      }
    } catch (error) {
      console.error('Failed to fetch blog posts:', error);
    }
  }

  // Fallback to hard-coded posts if fetch fails or s3Url is undefined
  if (mockPosts.length === 0) {
    mockPosts = [
      { title: 'Scaling Node.js APIs in 2025', excerpt: 'Strategies for handling high traffic with Node.js and AWS.', date: 'August 2025' },
      { title: 'DevOps with Terraform', excerpt: 'Automating infrastructure for faster deployments.', date: 'July 2025' },
      { title: 'Secure API Design', excerpt: 'Implementing OWASP best practices in RESTful APIs.', date: 'June 2025' },
    ];
  }

  return (
    <section id="blog" className="py-20 bg-muted/30 fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Technical Blog</h2>
          <p className="text-muted-foreground text-center mb-8">
            Sharing insights on backend development, AWS optimizations, and DevOps. (Future: Integrate Markdown via MDX or a CMS like Strapi.)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockPosts.map((post: BlogPost, index: number) => (
              <Card
                key={index}
                className="modern-card hover:shadow-lg transition-shadow duration-300 scale-hover"
                aria-labelledby={`post-title-${index}`}
              >
                <CardHeader>
                  <CardTitle id={`post-title-${index}`} className="text-lg">
                    {post.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <p className="text-sm text-muted-foreground mt-2">Coming soon...</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStub;