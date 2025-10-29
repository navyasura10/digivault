import FilterSidebar from '../FilterSidebar';

export default function FilterSidebarExample() {
  return (
    <div className="p-8 max-w-xs">
      <FilterSidebar onFilterChange={(filters) => console.log('Filters changed:', filters)} />
    </div>
  );
}
