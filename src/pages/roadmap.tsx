import {
  Briefcase,
  CheckCircle2,
  Circle,
  Clock,
  DollarSign,
  TrendingUp,
  User,
} from 'lucide-react';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  { name: 'Jan', users: 50, profit: 0 },
  { name: 'Feb', users: 120, profit: 0 },
  { name: 'Mar', users: 280, profit: 0 },
  { name: 'Apr', users: 450, profit: 50 },
  { name: 'May', users: 700, profit: 50 },
  { name: 'Jun', users: 1100, profit: 100 },
  { name: 'Jul', users: 1600, profit: 150 },
  { name: 'Aug', users: 2300, profit: 300 },
  { name: 'Sep', users: 3200, profit: 600 },
  { name: 'Oct', users: 4500, profit: 900 },
  { name: 'Nov', users: 6000, profit: 1200 },
  { name: 'Dec', users: 8000, profit: 1500 },
];

const todos = [
  {
    id: 1,
    title: 'Finish thinking doctor',
    assignees: ['Seba'],
    category: 'Product',
    completed: false,
    date: 'Jan-Jan',
  },
  {
    id: 2,
    title: 'Finish premium screens and premium payment setup',
    assignees: ['Seba'],
    category: 'Development',
    completed: false,
    date: 'Mar-May',
  },
  {
    id: 3,
    title: 'Add PlantStore users',
    assignees: ['Seba'],
    category: 'Development',
    completed: false,
    date: 'Feb-Apr',
  },
  {
    id: 4,
    title: 'Turn on swiping + matching (first we need more sellers)',
    assignees: ['Seba'],
    category: 'Development',
    completed: false,
    date: 'Apr-Jul',
  },
  {
    id: 5,
    title: 'Implement reviews and ratings',
    assignees: ['Seba'],
    category: 'Development',
    completed: false,
    date: 'May-Aug',
  },
  {
    id: 6,
    title: 'Final bug fixes and improvements',
    assignees: ['Seba'],
    category: 'Development',
    completed: false,
    date: 'Feb-Apr',
  },
  {
    id: 7,
    title: 'Start non-profit and set up legal structure',
    assignees: ['Seba'],
    category: 'Legal',
    completed: false,
    description:
      'We zouden directors zijn, app zit bij mij en lenen we uit en kunnen onszelf max 1.5k per jaar uit keren, maar geven vooral aan goede doelen en herinvesteren in ons bedrijf.',
    date: 'Jan-Feb',
  },
  {
    id: 8,
    title: 'Complete website',
    assignees: ['Nele'],
    category: 'Development',
    completed: false,
    date: 'Jan-Feb',
  },
  {
    id: 9,
    title: 'Test and find final bugs',
    assignees: ['Seba', 'Maarten', 'Nele'],
    category: 'QA',
    completed: false,
    note: 'Check for other improvements needed',
    date: 'Jan-Feb',
  },
  {
    id: 10,
    title: 'Plant stores sales pitch',
    assignees: ['Maarten', 'Seba', 'Nele'],
    category: 'Sales',
    completed: false,
    description:
      'Naar plant winkels gaan en zeggen dat we normaal 300 per jaar vragen, maar omdat we nog niet veel gebruikers hebben jullie levenslang 100 euro per jaar mogen betalen en we doen de eerste marketing setup.',
    date: 'Mar-Dec',
  },
  {
    id: 11,
    title: 'Finish flyers',
    assignees: ['Maarten'],
    category: 'Marketing',
    completed: false,
    date: 'Jan-Feb',
  },
  {
    id: 12,
    title: 'Contact people in Facebook groups',
    assignees: ['Maarten'],
    category: 'Marketing',
    completed: false,
    date: 'Feb-Dec',
  },
  {
    id: 13,
    title: 'Go flyering on plant events',
    assignees: ['Maarten'],
    category: 'Marketing',
    completed: false,
    date: 'Mar-Dec',
  },
  {
    id: 14,
    title: 'Create social media presence',
    assignees: ['Maarten'],
    category: 'Marketing',
    completed: false,
    date: 'Jan-Dec',
  },
];

const AssigneeBadge = ({ name }: { name: string }) => {
  const colors: Record<string, string> = {
    Seba: 'bg-blue-100 text-blue-800 border-blue-200',
    Maarten: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    Nele: 'bg-purple-100 text-purple-800 border-purple-200',
  };

  return (
    <span
      className={`rounded-full border px-2 py-0.5 text-xs font-medium ${colors[name] || 'bg-gray-100 text-gray-800'}`}
    >
      {name}
    </span>
  );
};

export default function App() {
  const [todoList, setTodoList] = useState(todos);

  const toggleTodo = (id: number) => {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 font-sans md:p-8">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <header className="flex flex-col items-start justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Growth & Tasks
            </h1>
            <p className="mt-1 text-gray-500">
              Strategic roadmap and projection
            </p>
          </div>
          <div className="mt-4 flex gap-4 md:mt-0">
            <div className="flex items-center gap-2 rounded-lg bg-blue-50 px-4 py-2">
              <User className="size-5 text-blue-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                  Target Users
                </p>
                <p className="font-bold text-blue-900">8,000</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-emerald-50 px-4 py-2">
              <DollarSign className="size-5 text-emerald-600" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  Target Rev
                </p>
                <p className="font-bold text-emerald-900">€1,500</p>
              </div>
            </div>
          </div>
        </header>

        {/* Chart Section */}
        <section className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <TrendingUp className="size-5 text-indigo-500" />
              Growth Projection
            </h2>
            <div className="flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-blue-500"></span>
                <span className="text-gray-600">Active Users</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-emerald-500"></span>
                <span className="text-gray-600">Profit (€)</span>
              </div>
            </div>
          </div>

          <div className="h-[400px] w-full">
            <div className="h-[400px] w-full" style={{ minHeight: '400px' }}>
              <ResponsiveContainer width="100%" height="100%" minHeight={400}>
                <AreaChart
                  data={data}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient
                      id="colorProfit"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.1} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f3f4f6"
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#9ca3af', fontSize: 12 }}
                  />
                  <Tooltip
                    contentStyle={{
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="users"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorUsers)"
                  />
                  <Area
                    type="monotone"
                    dataKey="profit"
                    stroke="#10b981"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorProfit)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-12">
              {months.map((month) => (
                <div
                  key={month}
                  className="border-r border-gray-200 p-2 text-center text-sm font-medium text-gray-500"
                >
                  {month}
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {todoList.map((todo) => {
                if (todo.completed) {
                  return null;
                }
                const [startMonthStr, endMonthStr] = todo.date.split('-');
                const startMonthIndex = months.findIndex(
                  (m) => m.toLowerCase() === startMonthStr?.toLowerCase(),
                );
                const endMonthIndex = months.findIndex(
                  (m) =>
                    m.toLowerCase() ===
                    (endMonthStr ?? startMonthStr)?.toLowerCase(),
                );

                if (startMonthIndex === -1 || endMonthIndex === -1) {
                  return null;
                }

                const gridColumnStart = startMonthIndex + 1;
                const gridColumnEnd = endMonthIndex + 2;

                const assigneeColors: Record<string, string> = {
                  Seba: 'bg-blue-500',
                  Maarten: 'bg-emerald-500',
                  Nele: 'bg-rose-500',
                };
                let color;
                if (todo.assignees.length > 1) {
                  color = 'bg-gray-700 hover:bg-gray-800'; // Special color for multiple assignees
                } else if (todo.assignees.length === 1 && todo.assignees[0]) {
                  color =
                    assigneeColors[todo.assignees[0]] ||
                    'bg-gray-500 hover:bg-gray-600';
                } else {
                  color = 'bg-gray-500 hover:bg-gray-600'; // Default if no assignees
                }

                return (
                  <div key={todo.id} className="grid grid-cols-12">
                    <div
                      className={`cursor-pointer rounded-lg p-2 text-white transition-all duration-200 hover:scale-105 ${color}`}
                      style={{
                        gridColumn: `${gridColumnStart} / ${gridColumnEnd}`,
                      }}
                      title={`${todo.title} - ${todo.assignees.join(', ')}`}
                    >
                      <div className="truncate font-bold">{todo.title}</div>
                      <div className="text-xs">{todo.assignees.join(', ')}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Action Plan Section */}
        <section className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50/50 p-6">
            <h2 className="flex items-center gap-2 text-xl font-bold text-gray-900">
              <Briefcase className="size-5 text-indigo-500" />
              Action Plan
            </h2>
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400">
              {todoList.filter((t) => t.completed).length} / {todoList.length}{' '}
              Complete
            </span>
          </div>

          <div className="divide-y divide-gray-100">
            {todoList.map((todo) => (
              <div
                key={todo.id}
                className={`flex flex-col gap-4 p-5 transition-all duration-200 hover:bg-gray-50 md:flex-row ${todo.completed ? 'bg-gray-50/80' : 'bg-white'}`}
              >
                <div className="flex flex-1 items-start gap-4">
                  <button
                    onClick={() => toggleTodo(todo.id)}
                    className="mt-1 shrink-0 focus:outline-none"
                  >
                    {todo.completed ? (
                      <CheckCircle2 className="size-6 text-green-500" />
                    ) : (
                      <Circle className="size-6 text-gray-300 hover:text-indigo-500" />
                    )}
                  </button>

                  <div className="flex-1">
                    <div className="mb-1 flex flex-col gap-2 md:flex-row md:items-center">
                      <span
                        className={`cursor-pointer text-lg font-medium ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-900'}`}
                        onClick={() => toggleTodo(todo.id)}
                      >
                        {todo.title}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {todo.assignees.map((person) => (
                          <AssigneeBadge key={person} name={person} />
                        ))}
                      </div>
                    </div>

                    {todo.description && (
                      <p
                        className={`mt-2 rounded-lg border border-indigo-100 bg-indigo-50 p-3 text-sm text-indigo-900 ${todo.completed ? 'opacity-50' : ''}`}
                      >
                        {todo.description}
                      </p>
                    )}
                    {todo.note && (
                      <p className="mt-1 text-sm italic text-gray-500">
                        Note: {todo.note}
                      </p>
                    )}
                  </div>
                </div>

                {/* Date Marker in List */}
                <div className="flex items-start pl-10 md:items-center md:pl-0">
                  <div
                    className={`flex items-center gap-2 whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium
                    ${todo.completed ? 'bg-gray-100 text-gray-500' : 'border border-orange-100 bg-orange-50 text-orange-700'}`}
                  >
                    <Clock className="size-4" />
                    {todo.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
