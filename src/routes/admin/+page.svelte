<script context="module">
    import { redirect } from '@sveltejs/kit';

    export async function load({ locals }) {
        const userSession = await locals.getSession();
        if (!userSession || !userSession.user || userSession.user.role !== 'admin') {
            throw redirect(302, '/auth/signin');
        }
    }
</script>

<script>
    import { onMount } from 'svelte';
    import './page.css';

    let subdomains = [];
    let filterText = '';

    onMount(() => {
        // Example of how subdomains might be populated dynamically
        function populateSubdomains() {
            // This would typically be replaced with server-side rendering or an API call
            subdomains = [
                // Example data
                { name: 'example', type: 'Type A', owner: 'Owner A' },
                // Add more subdomains as needed
            ];
        }

        populateSubdomains();
    });

    function filterSubdomains() {
        return subdomains.filter(subdomain => 
            subdomain.name.toLowerCase().includes(filterText.toLowerCase())
        );
    }
</script>

<div class="content">
    <h1>Subdomain Management</h1>
    
    <input 
        type="text" 
        placeholder="Filter subdomains..." 
        bind:value={filterText} 
        class="filter-input"
    />

    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th>Subdomain Name</th>
                    <th>Type</th>
                    <th>Owner</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {#if filterSubdomains().length > 0}
                    {#each filterSubdomains() as subdomain}
                        <tr>
                            <td>{subdomain.name}</td>
                            <td>{subdomain.type}</td>
                            <td>{subdomain.owner}</td>
                            <td>
                                <a href="javascript:void(0)" class="action-btn delete-btn">Delete</a>
                                <a href="javascript:void(0)" class="action-btn blacklist-btn">Blacklist</a>
                            </td>
                        </tr>
                    {/each}
                {:else}
                    <tr>
                        <td colspan="4">No subdomains found.</td>
                    </tr>
                {/if}
            </tbody>
        </table>
    </div>
</div>