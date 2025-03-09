import { Framework } from '@/lib/types';
import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Button } from '../ui/button';
import { BookOpen, Copy } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Tutorials = ({ framework }: { framework: Framework }) => {
	return (
		<>
			<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
				<Card className='py-3'>
					<CardHeader>
						<CardTitle>Getting Started with {framework.name}</CardTitle>
						<CardDescription>
							Learn the basics in 10 minutes
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='mb-4 rounded-md aspect-video bg-muted'></div>
						<p className='text-sm text-muted-foreground'>
							This tutorial covers the fundamentals of {framework.name},
							from installation to creating your first component.
						</p>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<div className='flex items-center gap-2'>
							<Avatar className='w-6 h-6'>
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
							<span className='text-sm'>Jane Doe</span>
						</div>
						<Button size='sm' variant='outline'>
							<BookOpen className='w-4 h-4 mr-2' />
							Start Tutorial
						</Button>
					</CardFooter>
				</Card>

				<Card className='py-3'>
					<CardHeader>
						<CardTitle>
							Building a Dashboard with {framework.name}
						</CardTitle>
						<CardDescription>Intermediate level project</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='mb-4 rounded-md aspect-video bg-muted'></div>
						<p className='text-sm text-muted-foreground'>
							In this tutorial, you'll build a complete analytics
							dashboard with charts, tables, and interactive elements.
						</p>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<div className='flex items-center gap-2'>
							<Avatar className='w-6 h-6'>
								<AvatarFallback>JD</AvatarFallback>
							</Avatar>
							<span className='text-sm'>John Smith</span>
						</div>
						<Button size='sm' variant='outline'>
							<BookOpen className='w-4 h-4 mr-2' />
							Start Tutorial
						</Button>
					</CardFooter>
				</Card>

				<Card className='py-3'>
					<CardHeader>
						<CardTitle>Advanced Patterns in {framework.name}</CardTitle>
						<CardDescription>For experienced developers</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='mb-4 rounded-md aspect-video bg-muted'></div>
						<p className='text-sm text-muted-foreground'>
							Explore advanced patterns and techniques for optimizing
							performance and managing complex state.
						</p>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<div className='flex items-center gap-2'>
							<Avatar className='w-6 h-6'>
								<AvatarFallback>AS</AvatarFallback>
							</Avatar>
							<span className='text-sm'>Alex Smith</span>
						</div>
						<Button size='sm' variant='outline'>
							<BookOpen className='w-4 h-4 mr-2' />
							Start Tutorial
						</Button>
					</CardFooter>
				</Card>

				<Card className='py-3'>
					<CardHeader>
						<CardTitle>
							Integrating {framework.name} with Backend APIs
						</CardTitle>
						<CardDescription>
							Full-stack development guide
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className='mb-4 rounded-md aspect-video bg-muted'></div>
						<p className='text-sm text-muted-foreground'>
							Learn how to connect your {framework.name} application with
							REST and GraphQL APIs.
						</p>
					</CardContent>
					<CardFooter className='flex justify-between'>
						<div className='flex items-center gap-2'>
							<Avatar className='w-6 h-6'>
								<AvatarFallback>MJ</AvatarFallback>
							</Avatar>
							<span className='text-sm'>Mike Johnson</span>
						</div>
						<Button size='sm' variant='outline'>
							<BookOpen className='w-4 h-4 mr-2' />
							Start Tutorial
						</Button>
					</CardFooter>
				</Card>
			</div>

			<Card className='py-3'>
				<CardHeader>
					<CardTitle>Code Examples</CardTitle>
					<CardDescription>Common patterns and solutions</CardDescription>
				</CardHeader>
				<CardContent className='space-y-6'>
					<div>
						<h3 className='mb-2 text-lg font-medium'>
							Authentication Flow
						</h3>
						<div className='relative'>
							<SyntaxHighlighter
								language='javascript'
								style={tomorrow}
								className='rounded-md'
							>
								{`import { auth } from './${framework.id}-auth';
   
// Simple authentication example
function LoginComponent() {
const login = async (credentials) => {
try {
   const user = await auth.signIn(credentials);
   return { success: true, user };
} catch (error) {
   return { success: false, error: error.message };
}
};

// Component implementation
// ...
}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute right-2 top-2'
								onClick={() =>
									navigator.clipboard
										.writeText(`import { auth } from './${framework.id}-auth';

// Simple authentication example
function LoginComponent() {
   const login = async (credentials) => {
      try {
         const user = await auth.signIn(credentials);
         return { success: true, user };
      } catch (error) {
         return { success: false, error: error.message };
      }
   };

   // Component implementation
   // ...
}`)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</div>

					<div>
						<h3 className='mb-2 text-lg font-medium'>
							Data Fetching Pattern
						</h3>
						<div className='relative'>
							<SyntaxHighlighter
								language='javascript'
								style={tomorrow}
								className='rounded-md'
							>
								{`import { fetchData } from './${framework.id}-fetch';
   
// Data fetching with loading and error states
function DataComponent() {
   const [data, setData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      async function loadData() {
         try {
         const result = await fetchData('/api/data');
         setData(result);
         } catch (err) {
         setError(err.message);
         } finally {
         setLoading(false);
         }
      }
      
      loadData();
   }, []);

   // Component implementation
   // ...
}`}
							</SyntaxHighlighter>
							<Button
								variant='ghost'
								size='icon'
								className='absolute right-2 top-2'
								onClick={() =>
									navigator.clipboard
										.writeText(`import { fetchData } from './${framework.id}-fetch';
   
                                             // Data fetching with loading and error states
                                             function DataComponent() {
                                             const [data, setData] = useState(null);
                                             const [loading, setLoading] = useState(true);
                                             const [error, setError] = useState(null);
                                             
                                             useEffect(() => {
                                                async function loadData() {
                                                   try {
                                                   const result = await fetchData('/api/data');
                                                   setData(result);
                                                   } catch (err) {
                                                   setError(err.message);
                                                   } finally {
                                                   setLoading(false);
                                                   }
                                                }
                                                
                                                loadData();
                                             }, []);
                                             
                                             // Component implementation
                                             // ...
                                             }`)
								}
							>
								<Copy className='w-4 h-4' />
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</>
	);
};

export default Tutorials;
